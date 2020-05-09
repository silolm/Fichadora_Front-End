import React, { useContext } from "react";
import {AuthContext} from "../providers/authProvider";

export default function useAuth() {
  return useContext(AuthContext)
}
