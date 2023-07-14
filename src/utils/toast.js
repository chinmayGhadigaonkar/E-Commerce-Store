import toast, { Toaster } from 'react-hot-toast';

const notify = (message) => {
            toast (`message` ,{
                        duration: 4000,
                        position: 'top-center',
                      
                        // Styling
                       
                        className: ' w-22  h-22 bg-black ',
                      
                        // Custom Icon
                        icon: '👏',
                      
                        // Change colors of success/error/loading icon
                        iconTheme: {
                          primary: '#000',
                          secondary: '#fff',
                        },
                      
                        // Aria
                        ariaProps: {
                          role: 'status',
                          'aria-live': 'polite',
                        },
                      })
};

export default notify;


