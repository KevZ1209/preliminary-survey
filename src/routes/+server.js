import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const formData = await request.json();

    const { error } = await supabase.from('responses').insert(formData).select();

    /* TODO: Better Error Checking :shrug: */
    console.log(error);

    return json(true);
}