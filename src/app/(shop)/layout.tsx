import { TopMenu } from '../../components/ui/TopMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <TopMenu/>
      <ToastContainer />
      
      {children}
    </main>
  );
}
