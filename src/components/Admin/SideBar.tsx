import React, { useState } from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/outline";
import { DocumentTextIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

const SideBar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: HomeIcon,
      current: true,
      submenu: null,
    },
    {
      name: "CMS",
      href: "#",
      icon: DocumentTextIcon,
      current: false,
      submenu: [
        {
          name: "Menu",
          href: "/admin/cms/menu",
          icon: DocumentTextIcon,
          current: false,
        },
        {
          name: "Articles",
          href: "/admin/cms/articles",
          icon: DocumentTextIcon,
          current: false,
        },
        {
          name: "Pages",
          href: "/admin/cms/pages",
          icon: DocumentTextIcon,
          current: false,
        },
      ],
    },
    {
      name: "Settings",
      href: "#",
      icon: CogIcon,
      current: false,
      submenu: [
        {
          name: "Users",
          href: "/admin/settings/users",
          icon: UserIcon,
          current: false,
        },
        {
          name: "General",
          href: "/admin/settings/general",
          icon: CogIcon,
          current: false,
        },
        {
          name: "Portfolio",
          href: "/admin/settings/portfolio",
          icon: CogIcon,
          current: false,
        },
        {
          name: "Marketing",
          href: "/admin/settings/marketing",
          icon: CogIcon,
          current: false,
        },
        {
          name: "Sales",
          href: "/admin/settings/sales",
          icon: CogIcon,
          current: false,
        },
        {
          name: "Reports",
          href: "/admin/settings/reports",
          icon: CogIcon,
          current: false,
        },
      ],
    },
  ];
  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`group flex items-center justify-between px-2 py-2 text-base font-medium rounded-md ${
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => item.submenu && toggleSubmenu(item.name)}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={`mr-4 flex-shrink-0 h-6 w-6 ${
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500"
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {item.submenu && (
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  {item.submenu && (
                    <div
                      className={`mt-2 space-y-1 pl-8 overflow-hidden transition-all duration-300 ease-in-out ${
                        openSubmenu === item.name ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                            subItem.current
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <subItem.icon
                            className={`mr-3 flex-shrink-0 h-5 w-5 ${
                              subItem.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500"
                            }`}
                            aria-hidden="true"
                          />
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-white space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={`group flex items-center justify-between px-2 py-2 text-base font-medium rounded-md ${
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      onClick={() => item.submenu && toggleSubmenu(item.name)}
                    >
                      <div className="flex items-center">
                        <item.icon
                          className={`mr-4 flex-shrink-0 h-6 w-6 ${
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500"
                          }`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </div>
                      {item.submenu && (
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                    {item.submenu && (
                      <div
                        className={`mt-2 space-y-1 pl-8 overflow-hidden transition-all duration-300 ease-in-out ${
                          openSubmenu === item.name ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                              subItem.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            <subItem.icon
                              className={`mr-3 flex-shrink-0 h-5 w-5 ${
                                subItem.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500"
                              }`}
                              aria-hidden="true"
                            />
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
