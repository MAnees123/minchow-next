import { cacheLife, cacheTag } from 'next/cache';

// Laravel CMS API (see ../backend). Set CMS_API_URL in .env.local for other environments.
const API = process.env.CMS_API_URL || 'http://localhost:8000/api';

async function request(path) {
  'use cache';
  cacheTag('cms');
  cacheLife('minutes');

  const res = await fetch(`${API}${path}`, { headers: { Accept: 'application/json' } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`CMS request failed: ${path} (${res.status})`);
  return res.json();
}

// Legacy standalone home cards (admin screen currently hidden). The home page now uses getHomeServiceCards().
export const getHomeServices = () => request('/home-services');
// Services ticked "Show on home page" in the admin.
export const getHomeServiceCards = () => request('/services?home=1');
export const getServices = () => request('/services');
export const getService = (slug) => request(`/services/${encodeURIComponent(slug)}`);
export const getCaseStudies = () => request('/case-studies');
export const getHomeCaseStudies = () => request('/case-studies?home=1');
export const getReviews = () => request('/reviews');
export const getTeam = () => request('/team');
