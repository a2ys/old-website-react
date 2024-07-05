interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 z-50 w-full flex flex-col px-20 pt-20 pb-10 menu bg-blue-300 min-[560px]:max-w-sm min-[768px]:pt-30 sidebar ${
        isSidebarOpen ? "open" : ""
      }`}
    >
      <button
        type="button"
        className="text-sm font-medium tracking-wider text-black uppercase close-link"
        onClick={toggleSidebar}
      >
        Close
      </button>{" "}
      <nav role="navigation">
        <a
          href="/work"
          title="Link to Work page"
          className="block mb-3 text-xl font-medium hover:text-white text-black"
        >
          Work
        </a>
        <a
          href="/about"
          title="Link to About page"
          className="block mb-3 text-xl font-medium hover:text-white text-black"
        >
          About
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
