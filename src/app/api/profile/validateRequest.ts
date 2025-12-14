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
  'bons.com'
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
  'jihad',
  'jihod',
  'muslim',
  'christian',
  'jewish',
  'situs slot',
  'slot online',
  'sabaslots',
  'saba slots',
];

export const validateRequest = ({ path, links, title }) => {
  const regex = /^[a-zA-Z0-9-]+$/;

  if (!path?.trim().length) {
    return `Path ${path} is required`;
  }

  if (RESERVED_PATHS.includes(path)) {
    return `Path ${path} is already reserved`;
  }

  if (!regex.test(path)) {
    return 'Path can only contain letters, numbers, and hyphens';
  }

  const isBlockedPath = BLOCKED_KEYWORDS.some(blockedKey =>
    path.toLowerCase()?.includes(blockedKey)
  );
  const isBlockedTitle = BLOCKED_KEYWORDS.some(blockedKey =>
    title?.toLowerCase()?.includes(blockedKey)
  );
  let isBlockedDomain = false;

  BLOCKED_DOMAINS.forEach(blockedDomain => {
    const isBlocked = links.some(link => link?.url?.toLowerCase()?.includes(blockedDomain));
    if (isBlocked) {
      isBlockedDomain = true;
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
