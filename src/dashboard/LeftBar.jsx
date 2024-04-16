// import { Sidebar } from "flowbite-react";
// import { BiBuoy } from "react-icons/bi";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiOutlineCloudUpload,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiViewBoards,
// } from "react-icons/hi";
// import userImg from "../assets/Banner-books/logo.png";

// const LeftBar = () => {
//   return (
//     <>
//     <div style={{ height: "100vh", display: "flex" }}>
//       <Sidebar
//         aria-label="Sidebar with content separator example"
//         style={{

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           height: "100%",
//           padding: "20px", // Add padding to the sidebar
//         }}
//       >

//         <div style={{ marginBottom: "20px"}}>
//           <Sidebar.Logo  img={userImg} imgAlt="Flowbite logo">
//             <p>User</p>
//           </Sidebar.Logo>
//         </div>

//         <Sidebar.ItemGroup></Sidebar.ItemGroup>
//         <Sidebar.Items>
//           <Sidebar.ItemGroup>

//             <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} style={{ marginBottom: "10px" }}>
//               Dashboard
//             </Sidebar.Item>
//             <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} style={{ marginBottom: "10px" }}>
//               Upload Book
//             </Sidebar.Item>
//             <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} style={{ marginBottom: "10px" }}>
//               Manage Books
//             </Sidebar.Item>
//             <Sidebar.Item href="#" icon={HiUser} style={{ marginBottom: "10px" }}>
//               Users
//             </Sidebar.Item>
//             <Sidebar.Item href="#" icon={HiShoppingBag} style={{ marginBottom: "10px" }}>
//               Products
//             </Sidebar.Item>
//             <Sidebar.Item href="/login" icon={HiArrowSmRight} style={{ marginBottom: "10px" }}>
//               Sign In
//             </Sidebar.Item>
//             <Sidebar.Item href="logout" icon={HiTable} style={{ marginBottom: "10px" }}>
//               Sign Out
//             </Sidebar.Item>
//           </Sidebar.ItemGroup>
//           <Sidebar.ItemGroup>
//             <Sidebar.Item href="#" icon={HiChartPie} style={{ marginBottom: "10px" }}>
//               Upgrade to Pro
//             </Sidebar.Item>
//             <Sidebar.Item href="#" icon={HiViewBoards} style={{ marginBottom: "10px" }}>
//               Documentation
//             </Sidebar.Item>
//             <Sidebar.Item href="#" icon={BiBuoy} style={{ marginBottom: "10px" }}>
//               Help
//             </Sidebar.Item>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>
//       <div style={{ flex: 1 }}></div>

//     </div>

//     </>
//   );
// };

// export default LeftBar;

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../assets/Banner-books/logo.png";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const LeftBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <Sidebar
          aria-label="Sidebar with content separator example"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            padding: "20px", // Add padding to the sidebar
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Sidebar.Logo className="mx-8 " img={user?.photoURL || userImg} imgAlt="Flowbite logo"
            
            >
              <p className="mx-2">{
              user?.displayName || "Demo user"
              
              
              }</p>
            </Sidebar.Logo>
          </div>

          <Sidebar.ItemGroup></Sidebar.ItemGroup>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {/* <Sidebar.Item
                href="/admin/dashboard"
                icon={HiChartPie}
                style={{ marginBottom: "10px" }}
              >
                Dashboard
              </Sidebar.Item> */}
              <Sidebar.Item
                href="/admin/dashboard/upload"
                icon={HiOutlineCloudUpload}
                style={{ marginBottom: "10px" }}
              >
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/dashboard/manage"
                icon={HiInbox}
                style={{ marginBottom: "10px" }}
              >
                Manage Books
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiUser}
                style={{ marginBottom: "10px" }}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiShoppingBag}
                style={{ marginBottom: "10px" }}
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                href="/logout"
                icon={HiArrowSmRight}
                style={{ marginBottom: "10px" }}
              >
        
              
                Sign Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                icon={HiChartPie}
                style={{ marginBottom: "10px" }}
              >
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiViewBoards}
                style={{ marginBottom: "10px" }}
              >
                Documentation
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={BiBuoy}
                style={{ marginBottom: "10px" }}
              >
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
};

export default LeftBar;
