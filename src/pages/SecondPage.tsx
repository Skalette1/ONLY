

import '../app/index.css'
import { SecondFooter } from '../app/widgets/footer/ui/SecondFooter';

export const SecondPage = () => {
  return (
    <div className="main-page">
      <main>
        <h1>Исторические даты</h1>

        <div className="main-dates">
          <h2 style={{ color: '#3877EE' }}>2016</h2>
          <h2 style={{ color: 'rgb(222, 117, 152)' }}>2024</h2>
        </div>
      </main>

      <SecondFooter />
    </div>
  );
};
