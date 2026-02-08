const RESERVED_PATHS = [
  'api',
  'profile',
  'login',
  'register',
  'edit',
  'delete',
  'create',
  'preview',
  'settings',
  'logout',
  'login',
  'auth',
  'callback',
  'signin',
  'signup',
  'signout',
  'create-page',
  'privacy',
  'policy',
  'terms',
  'privacy-policy'
];

const BLOCKED_DOMAINS = [
  '1xbet',
  'mostbet',
  'journal.ad',
  'games.ad',
  'klikcepat',
  'casino-x',
  'joycasino',
  'casino',
  'ramenbet',
  'tedbet',
  'bons.com',
  'nip.io',
  'sslip.io',
  'xip.io',
  'ngrok.io',
  'ngrok.com'
];

const BLOCKED_KEYWORDS = [
  '1xbet',
  'panen',
  'panenspace',
  'sbsslot',
  'sbslot',
  'aston777',
  'sabaslots',
  'panen303',
  'ss777',
  'situsslot',
  'situsslot777',
  'new member bonus',
  'casino',
  'religion',
  'islamic',
  'islam',
  'jihad',
  'jihod',
  'muslim',
  'christian',
  'jewish',
  'situs slot',
  'slot online',
  'sabaslots',
  'saba slots'
];

export const validateRequest = ({ path, links, title }) => {
  const regex = /^[a-zA-Z0-9-]+$/;

  const normalizedPath = (path ?? '').trim().toLowerCase();

  if (!normalizedPath.length) {
    return `Path ${path} is required`;
  }

  if (RESERVED_PATHS.includes(normalizedPath)) {
    return `Path ${path} is already reserved`;
  }

  if (!regex.test(normalizedPath)) {
    return 'Path can only contain letters, numbers, and hyphens';
  }

  if (normalizedPath.length > 64) {
    return 'Path is too long';
  }

  const isBlockedPath = BLOCKED_KEYWORDS.some(blockedKey =>
    normalizedPath.toLowerCase()?.includes(blockedKey)
  );
  const isBlockedTitle = BLOCKED_KEYWORDS.some(blockedKey =>
    title?.toLowerCase()?.includes(blockedKey)
  );

  const isBlockedDomain =
    Array.isArray(links) &&
    links.some(link => {
      try {
        const url = new URL(String(link?.url ?? ''));
        const host = url.hostname.toLowerCase();

        const isHttp = url.protocol === 'http:' || url.protocol === 'https:';
        const hasCredentials = Boolean(url.username || url.password);
        const isPunycode = host.startsWith('xn--');
        const isIpHost = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
        const labels = host.split('.').filter(Boolean);
        const hasNumericLabel = labels.some(label => /^\d+$/.test(label));

        if (!isHttp || hasCredentials || isPunycode || isIpHost || hasNumericLabel) return true;

        return BLOCKED_DOMAINS.some(blockedDomain => host.includes(blockedDomain));
      } catch {
        return true; // invalid URL
      }
    });

  if (isBlockedPath || isBlockedDomain || isBlockedTitle) {
    return 'This path name or link is not allowed to use';
  }

  if (Array.isArray(links) && links.length > 10) {
    return 'Cannot create more than 10 links';
  }

  return undefined;
};
