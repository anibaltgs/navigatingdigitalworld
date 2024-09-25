// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
//   DialogImage,
//   DialogSubtitle,
//   DialogClose,
//   DialogDescription,
//   DialogContainer,
// } from '@/components/core/dialog';
// import { PlusIcon } from 'lucide-react';

// export function Farol2() {
//   return (
//     <Dialog
//       transition={{
//         type: 'spring',
//         bounce: 0.05,
//         duration: 0.25,
//       }}
//     >
//       <DialogTrigger
//         style={{
//           borderRadius: '12px',
//         }}
//         className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
//       >
//         <DialogImage
//           src='/thefeelingofpower.png'
//           alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
//           className='h-48 w-full object-contain'
//         />
//         <div className='flex flex-grow flex-row items-end justify-between p-2'>
//           <div>
//             <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
//               Isaac Asimov
//             </DialogTitle>
//             <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
//               The Feeling of Power
//             </DialogSubtitle>
//           </div>
//           <button
//             type='button'
//             className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
//             aria-label='Open dialog'
//           >
//             <PlusIcon size={12} />
//           </button>
//         </div>
//       </DialogTrigger>
//       <DialogContainer>
//         <DialogContent
//           style={{
//             borderRadius: '24px',
//           }}
//           className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
//         >
//           <DialogImage
//             src='/thefeelingofpower.png'
//             alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
//             className='h-full w-full'
//           />
//           <div className='p-6'>
//             <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
//               Isaac Asimov
//             </DialogTitle>
//             <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
//               The Feeling of Power
//             </DialogSubtitle>
//             <DialogDescription
//               disableLayoutAnimation
//               variants={{
//                 initial: { opacity: 0, scale: 0.8, y: 100 },
//                 animate: { opacity: 1, scale: 1, y: 0 },
//                 exit: { opacity: 0, scale: 0.8, y: 100 },
//               }}
//             >
//               <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
//                 "The Feeling of Power" depicts a future where humans rely
//                 entirely on computers for math. When Myron Aub rediscovers
//                 manual calculation, it's seen as revolutionary. This story
//                 resonates in our AI age, warning against over-reliance on
//                 technology and loss of fundamental skills. Understanding math
//                 remains crucial for critically evaluating AI outputs, grasping
//                 AI's capabilities and limits, and maintaining human agency in an
//                 automated world. As AI advances, mathematical literacy becomes
//                 key to ethical development, informed decision-making, and
//                 preserving our problem-solving abilities.
//               </p>

//               {/* <a
//                 className='mt-2 inline-flex text-zinc-500 underline'
//                 href='https://www.theguardian.com/us-news/2024/jan/31/tiktok-meta-x-congress-hearing-child-sexual-exploitation'
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 4
//               </a> */}
//             </DialogDescription>
//           </div>
//           <DialogClose className='text-zinc-50' />
//         </DialogContent>
//       </DialogContainer>
//     </Dialog>
//   );
// }
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/core/dialog';
import { PlusIcon } from 'lucide-react';
import * as Craft from '@/components/craft';

export function Farol2() {
  return (
    <Craft.Section>
      <Craft.Container>
        <Dialog
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <DialogTrigger
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <DialogImage
              src='/thefeelingofpower.png'
              alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
              className='h-48 w-full object-contain'
            />
            <div className='flex flex-grow flex-row items-end justify-between p-2'>
              <div>
                <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
                  Isaac Asimov
                </DialogTitle>
                <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  The Feeling of Power
                </DialogSubtitle>
              </div>
              <button
                type='button'
                className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                aria-label='Open dialog'
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent
              style={{
                borderRadius: '24px',
              }}
              className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
            >
              <DialogImage
                src='/thefeelingofpower.png'
                alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                className='h-full w-full'
              />
              <div className='p-6'>
                <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                  Isaac Asimov
                </DialogTitle>
                <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  The Feeling of Power
                </DialogSubtitle>
                <DialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                    "The Feeling of Power" depicts a future where humans rely
                    entirely on computers for math. When Myron Aub rediscovers
                    manual calculation, it's seen as revolutionary. This story
                    resonates in our AI age, warning against over-reliance on
                    technology and loss of fundamental skills. Understanding
                    math remains crucial for critically evaluating AI outputs,
                    grasping AI's capabilities and limits, and maintaining human
                    agency in an automated world. As AI advances, mathematical
                    literacy becomes key to ethical development, informed
                    decision-making, and preserving our problem-solving
                    abilities.
                  </p>
                </DialogDescription>
              </div>
              <DialogClose className='text-zinc-50' />
            </DialogContent>
          </DialogContainer>
        </Dialog>
      </Craft.Container>
    </Craft.Section>
  );
}
