import { Router } from './router';
import { FormProvider } from './context/FormContext'
import { Header } from './components/header';
import { Footer } from './components/footer';

const App = () => {
  return (
    <FormProvider>
      <Header />
      <Router />
      <Footer />
    </FormProvider>
  );
}

export default App;
