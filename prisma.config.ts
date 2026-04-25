import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: env('postgresql://postgres.malutiofpxorlrviiecw:n7NGPb&p60pW8O9.HgYh@aws-0-eu-west-1.pooler.supabase.com:6543/postgres'),
    directUrl: env('postgresql://postgres:n7NGPb&p60pW8O9.HgYh@db.malutiofpxorlrviiecw.supabase.co:5432/postgres'),
  },
});