import { useRouter } from 'vue-router';

const useSetRouters = () => {
  const router = useRouter();

  const setInLocal = url => {
    localStorage.setItem('activeRouter', JSON.stringify(url));
  };
  const getInLocal = () => {
    return JSON.parse(localStorage.getItem('activeRouter'));
  };

  const setRouterIntoSession = url => {
    sessionStorage.setItem('activeRouter', JSON.stringify(url));
  };
  const getRouterIntoSession = () => {
    return JSON.parse(sessionStorage.getItem('activeRouter'));
  };
  const pushRoute = url => {
    router.push(url);
    setRouterIntoSession(url);
  };
  const replaceRoute = url => {
    router.replace(url);
    setRouterIntoSession(url);
  };

  const goBack = num => {
    router.go(num);

    const timer = setTimeout(() => {
      setRouterIntoSession(router.currentRoute.value.fullPath);
      clearTimeout(timer);
    }, 800);
  };
  return {
    pushRoute,
    replaceRoute,
    setInLocal,
    getInLocal,
    goBack,
    setRouterIntoSession,
    getRouterIntoSession,
  };
};

export default useSetRouters;
