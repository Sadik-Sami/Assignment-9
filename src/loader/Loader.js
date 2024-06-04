import { getShoppingCart } from '../utilities/fakedb';

export const appliedJobsLoader = async () => {
  const loadedJobs = await fetch('/applyJobs.json');
  const jobs = await loadedJobs.json();
  const appliedJobs = getShoppingCart();
  const saved = [];
  for (const id in appliedJobs) {
    const addedProduct = jobs.find((pd) => pd.id == id);
    if (addedProduct) {
      const quantity = appliedJobs[id];
      addedProduct.quantity = quantity;
      saved.push(addedProduct);
    }
  }
  return saved;
};
