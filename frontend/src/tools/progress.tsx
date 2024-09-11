import { CircleProgress } from '../components';
import { createRoot, Root } from 'react-dom/client';

const className = 'CircleProgressContainer';
let rootProgress: Root | null = null;
const d = document;

const onProcess = () => {
  if (!d || rootProgress) return;

  let elementContainer = d.querySelector(`.${className}`);
  if (!elementContainer) {
    elementContainer = d.createElement('div');
    elementContainer.className = className;
    d.body.appendChild(elementContainer);
  }

  rootProgress = createRoot(elementContainer);
  rootProgress.render(<CircleProgress />);
};

const offProcess = () => {
  if (!d || !rootProgress) return;

  let elementContainer = d.querySelector(`.${className}`);
  if (elementContainer) {
    rootProgress.unmount && rootProgress.unmount();
    rootProgress = null;
    elementContainer.parentNode?.removeChild(elementContainer);
  }
};

export { onProcess, offProcess };
