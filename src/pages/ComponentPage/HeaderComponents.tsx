import {Divider} from '../../components/Divider/Divider';

export default function HeaderComponents() {
  return (
    <div className='flex flex-col gap-4'>
      <h1>Headers</h1>
      <Divider />
      <div>
        <h1>H1 Header</h1>
        <h2>H2 Header</h2>
        <h3>H3 Header</h3>
        <h4>H4 Header</h4>
        <span>Normal text</span>
      </div>
    </div>
  );
}
