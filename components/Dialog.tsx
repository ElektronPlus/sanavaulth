'use client'

import * as RadDialog from '@radix-ui/react-dialog';
import { ReactNode } from "react";

interface DialogProps {
    button: ReactNode;
    children: ReactNode;
    description?: ReactNode;
    title: ReactNode;
}

export function Dialog({ button, children, description, title }: DialogProps) {
    return (
        <RadDialog.Root>
            <RadDialog.Trigger asChild>
                {button}
            </RadDialog.Trigger>
            <RadDialog.Portal>
            <RadDialog.Overlay className='backdrop-blur fixed inset-0' />
            <RadDialog.Content className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 py-5 pl-5 pr-8 text-white rounded-md drop-shadow-xl'>
                <RadDialog.Title className='font-bold text-xl mb-2'>{title}</RadDialog.Title>
                <RadDialog.Description>
                    {description && description}
                </RadDialog.Description>
                {children}
                <RadDialog.Close asChild className='mt-2 absolute right-4 top-2'>
                <button aria-label="Close">
                    X
                </button>
                </RadDialog.Close>
            </RadDialog.Content>
            </RadDialog.Portal>
        </RadDialog.Root>
    )
}