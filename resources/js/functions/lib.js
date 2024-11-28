
import { router } from '@inertiajs/react';

export const changeurl = (variable,e) =>{
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set(variable, e);
  currentUrl.searchParams.set('page', 1);

  if(variable == 'brand'){
    currentUrl.searchParams.set('model', 'any');
  }

  router.visit(currentUrl.toString(), {
    preserveState: true,
    replace: true
  });
}
