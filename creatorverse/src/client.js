import { createClient } from '@supabase/supabase-js'

const URL = 'https://bouelupttemkofylyatu.supabase.co'

const API_KEY = 'sb_publishable_SvJvtjZmQqGEM4OLYzocEQ__mJ634_q'

export const supabase = createClient(URL, API_KEY)