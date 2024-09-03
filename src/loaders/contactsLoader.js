import { getContact, getContacts } from "../contacts";

export async function contactsLoader({ request }) {
  // localforage.clear();
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}
export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
