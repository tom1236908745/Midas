export default ({ store, route, redirect }: any) => {
  
  if (
    !store.getters.isAuthenticated &&
    route.name !== "login" &&
    route.name !== "register"
  ) {
    console.log('/login');
    
    redirect("/login");
  }
  if (
    store.getters.isAuthenticated &&
    (route.name === "login" || route.name === "register")
  ) {;
    console.log('/');
    
    redirect("/");
  }
};
