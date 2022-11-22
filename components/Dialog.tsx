import * as RadDialog from '@radix-ui/react-dialog';
import { ReactNode } from "react";

interface DialogProps {
    button: ReactNode;
    children: ReactNode;
    description?: ReactNode;
    title: ReactNode;
    open: boolean;
    setOpen: (open: boolean) => void;
    isCaptchaOpen: boolean;
}

export function Dialog({ button, children, description, title, open, setOpen, isCaptchaOpen }: DialogProps) {
    const checkCanClose = () => {
        if(!open) setOpen(true);
        if(isCaptchaOpen) setOpen(true);
        if(open && !isCaptchaOpen) setOpen(false);
    }

    return (
        <RadDialog.Root open={open} onOpenChange={checkCanClose}>
            <RadDialog.Trigger asChild>
                {button}
            </RadDialog.Trigger>
            <RadDialog.Portal>
            <RadDialog.Overlay className='DialogOverlay backdrop-blur fixed inset-0' />
            <RadDialog.Content className='DialogContent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 py-5 pl-5 pr-8 text-white rounded-md drop-shadow-xl'>
                <div className='mb-8'>
                    <RadDialog.Title className='font-bold text-xl'>{title}</RadDialog.Title>
                    <RadDialog.Description className="text-gray-300">
                        {description && description}
                    </RadDialog.Description>
                </div>
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