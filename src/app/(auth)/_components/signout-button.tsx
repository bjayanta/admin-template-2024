import { signOutAction } from '@/actions/signoutAction';
import { LogOut } from 'lucide-react';
import React, { FormEvent } from 'react'

export default function SignOutButton() {
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        try {
          await signOutAction();
          localStorage.clear();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <button type="submit" className="py-2 text-sm flex transition">
                <LogOut size={18} />
                <span className="ml-2">Logout</span>
            </button>
        </form>
    )
}
