import { Route, Routes } from "react-router-dom";
import {
  Wallets,
  Profile,
  Kyc,
  Dashboard,
  Investments,
  MyReferrals,
  ClaimOfYields,
  DocumentationLegal,
} from "./components";
import Error from "./components/Error";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="wallets" element={<Wallets />} />
        <Route path="kyc" element={<Kyc />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="investments" element={<Investments />} />
        <Route path="my-referrals" element={<MyReferrals />} />
        <Route path="claim-of-yields" element={<ClaimOfYields />} />
        <Route path="documentation-legal" element={<DocumentationLegal />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
