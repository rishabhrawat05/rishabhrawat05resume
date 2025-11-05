function BadgeComp({ text, logo, isDarkMode = true, url }) {
  const Component = url ? 'a' : 'span';
  const linkProps = url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <Component 
      {...linkProps}
      className={`inline-flex items-center border-dashed gap-1 px-2 py-1 rounded-lg text-sm font-medium transition-all ${
        isDarkMode
          ? "bg-white/10 border border-white/20 text-white"
          : "bg-black/5 border border-black/10 text-black"
      } ${url ? 'cursor-pointer hover:scale-105 hover:border-solid' : ''}`}
    >
      <img src={logo} alt={text} className="h-4 w-4" />
      {text}
    </Component>
  );
}

export default BadgeComp;