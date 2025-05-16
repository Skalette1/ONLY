

import '../app/index.css'
import { MainFooter } from '../app/widgets/footer/ui/MainFooter';

export const MainPage = () => {
  return (
    <div className="main-page">
      <main>
        <h1>Исторические даты</h1>

        <div className="main-dates">
          <h2 style={{ color: '#3877EE' }}>2015</h2>
          <h2 style={{ color: 'rgb(222, 117, 152)' }}>2022</h2>
        </div>
      </main>

      <MainFooter />
    </div>
  );
};
