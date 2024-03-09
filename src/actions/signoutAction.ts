'use server';

import { redirect } from "next/navigation";

export const signOutAction = async () => {
    try {
        // await signOut();
    } catch (error) {
        console.log(error);
        throw error;
    }
  
    redirect('/signin');
};