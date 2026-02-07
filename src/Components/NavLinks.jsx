function NavLinks() {
  const links = [
    { name: "About Us", route: "#about" },
    { name: "Blog", route: "#blog" },
    { name: "Cafe", route: "#cafe" },
    { name: "Contact Us", route: "#contact" },
  ];

  return (
    <ul className="flex items-center gap-6 text-sm font-medium">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.route}
            className="text-purple-600 hover:text-purple-800 transition"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
