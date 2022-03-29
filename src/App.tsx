import { Router } from './router';
import { FormProvider } from './context/FormContext'

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
