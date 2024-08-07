import { handleGoogleLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGoogleLogin}>
        <button>Login With Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
