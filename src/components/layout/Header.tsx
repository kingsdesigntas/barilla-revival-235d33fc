import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Calendar } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity-queries";
import { defaultSiteSettings } from "@/lib/default-content";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const location = useLocation();
	const { content: settings } = useSanityContent("siteSettings", SITE_SETTINGS_QUERY, defaultSiteSettings);

	const isActive = (path: string) => location.pathname === path;

	// Derive nav items from CMS content
	const navItems = settings.navigationItems || defaultSiteSettings.navigationItems;
	const normalize = (value?: string) => (value || "").trim().toLowerCase();

	const findSubmenuLinks = (label: string, pathPrefix: string) => {
		const byLabel = navItems.find((item) => normalize(item.label) === normalize(label));
		if (byLabel?.children?.length) return byLabel.children;

		const byPathPrefix = navItems.find((item) => item.children?.some((child) => child.href?.startsWith(pathPrefix)));

		return byPathPrefix?.children || [];
	};

	const accommodationLinks =
		findSubmenuLinks("Accommodation", "/accommodation") ||
		defaultSiteSettings.navigationItems.find((n) => n.label === "Accommodation")?.children ||
		[];

	const thingsToDoLinks =
		findSubmenuLinks("Things to Do", "/things-to-do") ||
		defaultSiteSettings.navigationItems.find((n) => n.label === "Things to Do")?.children ||
		[];

	return (
		<header className="sticky top-0 z-50 bg-background shadow-sm">
			{/* Top bar with contact info */}
			<div className="bg-primary text-primary-foreground py-2">
				<div className="container flex justify-between items-center text-sm">
					<a
						href={`tel:${settings.freeCallPhone?.replace(/\s/g, "")}`}
						className="flex items-center gap-2 hover:text-accent transition-colors"
					>
						<Phone size={14} />
						<span>Freecall: {settings.freeCallPhone}</span>
					</a>
					<a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
						<Mail size={14} />
						<span className="hidden sm:inline">{settings.email}</span>
					</a>
				</div>
			</div>

			{/* Booking info bar */}
			<div className="bg-secondary border-b border-border py-2">
				<div className="container flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm">
					<span className="text-foreground font-medium">Call Us Anytime</span>
					<a
						href={`tel:${settings.freeCallPhone?.replace(/\s/g, "")}`}
						className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
					>
						<Phone size={14} />
						<span>Freecall: {settings.freeCallPhone}</span>
					</a>
					<span className="hidden sm:inline text-muted-foreground">|</span>
					<a
						href={`mailto:${settings.email}`}
						className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
					>
						<Mail size={14} />
						<span>Mail Us: {settings.email}</span>
					</a>
					<Link
						to="/contact"
						className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-semibold hover:bg-accent/90 transition-colors"
					>
						<Calendar size={14} />
						Book your Holiday
					</Link>
				</div>
			</div>

			{/* Main navigation */}
			<nav className="container py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<span className="text-2xl font-serif font-bold text-primary tracking-wide">{settings.siteName}</span>
						<span className="hidden sm:block ml-2 text-sm text-muted-foreground">{settings.tagline}</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-8">
						<Link to="/" className={`nav-link ${isActive("/") ? "text-accent" : ""}`}>
							Home
						</Link>

						{/* Accommodation Dropdown */}
						<div
							className="relative group"
							onMouseEnter={() => setOpenDropdown("accommodation")}
							onMouseLeave={() => setOpenDropdown(null)}
						>
							<button className="nav-link flex items-center gap-1">
								Accommodation <ChevronDown size={16} />
							</button>
							<div className={`absolute top-full left-0 pt-2 ${openDropdown === "accommodation" ? "block" : "hidden"}`}>
								<div className="bg-background shadow-lg rounded-lg py-2 min-w-[220px] border">
									{accommodationLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href}
											className="block px-4 py-2 hover:bg-secondary transition-colors text-foreground hover:text-accent"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Things to Do Dropdown */}
						<div
							className="relative group"
							onMouseEnter={() => setOpenDropdown("things")}
							onMouseLeave={() => setOpenDropdown(null)}
						>
							<button className="nav-link flex items-center gap-1">
								Things to Do <ChevronDown size={16} />
							</button>
							<div className={`absolute top-full left-0 pt-2 ${openDropdown === "things" ? "block" : "hidden"}`}>
								<div className="bg-background shadow-lg rounded-lg py-2 min-w-[200px] border">
									{thingsToDoLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href}
											className="block px-4 py-2 hover:bg-secondary transition-colors text-foreground hover:text-accent"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link to="/contact" className={`nav-link ${isActive("/contact") ? "text-accent" : ""}`}>
							Contact
						</Link>

						<Link to="/contact" className="btn-cta">
							Book Now
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						className="lg:hidden p-2 text-primary"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4 bg-background border rounded-lg shadow-lg animate-fade-in">
						<Link to="/" className="nav-link-mobile border-b" onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>

						<div className="border-b">
							<div className="nav-link-mobile font-semibold text-primary">Accommodation</div>
							{accommodationLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="block py-2 px-8 hover:bg-secondary text-muted-foreground"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>

						<div className="border-b">
							<div className="nav-link-mobile font-semibold text-primary">Things to Do</div>
							{thingsToDoLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="block py-2 px-8 hover:bg-secondary text-muted-foreground"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>

						<Link to="/contact" className="nav-link-mobile border-b" onClick={() => setIsMenuOpen(false)}>
							Contact
						</Link>

						<div className="p-4">
							<Link to="/contact" className="btn-cta block text-center" onClick={() => setIsMenuOpen(false)}>
								Book Now
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
