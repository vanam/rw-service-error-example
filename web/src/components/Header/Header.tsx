import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

// https://github.com/landifydesign/regim-gatsby-template/
// https://tailwindui.com/components/marketing/elements/headers
const Header = () => {
  const { logOut, isAuthenticated, currentUser, hasRole } = useAuth()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={routes.home()} className="-m-1.5 flex items-center p-1.5">
            {/* <span className="sr-only">{AppConfig.site_name}</span> */}
            <img
              src="/assets/logo/logo.svg"
              alt="SomeApp logo"
              className="mr-3 h-8 w-auto"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              SomeApp
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Otevřít menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            <>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      {currentUser?.email}
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'rotate-180' : '',
                          'h-5 w-5 flex-none text-gray-400'
                        )}
                        // className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                          <button
                            key="logout"
                            onClick={logOut}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </>
          ) : (
            <Link
              to={routes.login()}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={routes.home()} className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">SomeApp</span>
              <img
                src="/assets/logo/logo.svg"
                className="mr-3 h-8 w-auto"
                alt="SomeApp logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                SomeApp
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                {isAuthenticated ? (
                  <>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {currentUser?.email}
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            <Disclosure.Button
                              key="logout"
                              as="button"
                              onClick={logOut}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              Logout
                            </Disclosure.Button>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </>
                ) : (
                  <Link
                    to={routes.login()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
export default Header
