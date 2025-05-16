
import '../app/index.css'
import { ThirdFooter } from '../app/widgets/footer/ui/ThirdFooter';

export const ThirdPage = () => {
  return (
    <div className="main-page">
      <main>
        <h1>Исторические даты</h1>

        <div className="main-dates">
          <h2 style={{ color: '#3877EE' }}>2010</h2>
          <h2 style={{ color: 'rgb(222, 117, 152)' }}>2021</h2>
        </div>
      </main>
      <ThirdFooter />
    </div>
  );
};
