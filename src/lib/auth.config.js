export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isOnPracticePage =
        request.nextUrl?.pathname.startsWith("/practice");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRatePage = request.nextUrl?.pathname.startsWith("/rate");

      if (isOnAdminPage && !user) {
        return false;
      }

      if (isOnRatePage && !user) {
        return false;
      }

      if (isOnPracticePage && !user) {
        return false;
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};
