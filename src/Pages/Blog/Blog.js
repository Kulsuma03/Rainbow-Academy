import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <div
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"

                            >
                                1
                            </div>
                            <p className="text-gray-600">Cors</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    what is cors?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <div

                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"

                            >
                                2
                            </div>
                            <p className="text-gray-600">Firebase</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                            Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                        </p>
                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                            Other Option
                        </p>
                        <ul className="text-gray-700 flex ">
                            <div className="mr-44">
                                <li>STYTCH</li>
                                <li>Ory</li>
                                <li>Supabase</li>
                                <li>Okta</li>
                                <li>PingIdentity</li>
                                <li>Keycloak</li>
                            </div>
                            <div>
                                <li>Frontegg</li>
                                <li>Authress</li>
                                <li>Auth0</li>
                                <li>Amazon Cognito</li>
                                <li>OneLogin</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <div
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"

                            >
                                3
                            </div>
                            <p className="text-gray-600">Private Route</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does the private route work?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                4
                            </a>
                            <p className="text-gray-600">Node</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is Node? How does Node work?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link
                    to="/faq"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    See all articles
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Blog;