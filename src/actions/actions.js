import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function CreateContactAction() {
  const contact = await createContact();
  console.log(contact);
  return redirect(`contacts/:${contact.id}/edit`);
}
// editing contact action
export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
// delete contact action
export async function deleteContactAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
