-- Contact form submissions
-- Run in Supabase SQL Editor (or via CLI): Dashboard → SQL → New query

create extension if not exists "pgcrypto";

create table if not exists public.contact (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now(),

  constraint contact_name_length check (char_length(name) between 2 and 80),
  constraint contact_email_length check (char_length(email) between 3 and 254),
  constraint contact_company_length check (company is null or char_length(company) <= 100),
  constraint contact_subject_length check (char_length(subject) between 3 and 120),
  constraint contact_message_length check (char_length(message) between 20 and 2000)
);

create index if not exists contact_created_at_idx on public.contact (created_at desc);
create index if not exists contact_email_idx on public.contact (email);

alter table public.contact enable row level security;

-- No public policies: inserts go through the Next.js API with the service role key.
-- Add SELECT policies later for an authenticated admin dashboard if needed.

comment on table public.contact is 'Portfolio contact form submissions';
