import type { UsuarioDataProps } from "@/interfaces/replyInterface";
import { createContext } from "react";

interface UserDataContextProps {
    userData: UsuarioDataProps | null;
    setUserData: (data: UsuarioDataProps | null) => void;
}

const props : UserDataContextProps = {
   userData: null,
   setUserData: (data: UsuarioDataProps | null) => {}
}

const UserDataContext = createContext(props);

export default UserDataContext

