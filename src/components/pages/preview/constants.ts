import toast from 'react-hot-toast';

const isEmpty = value => value?.trim().length === 0;

export const isValidForm = formData => {
  const regex = /^[a-zA-Z0-9-]+$/;

  if (isEmpty(formData?.path)) {
    toast.error('Please enter a valid path');
    return false;
  }

  if (!regex.test(formData?.path)) {
    toast.error('Path can only contain letters, numbers, and hyphens');
    return false;
  }

  if (isEmpty(formData?.title)) {
    toast.error('Please enter a valid title');
    return false;
  }

  for (let i = 0; i < formData.links.length; i++) {
    const link = formData.links[i];
    if (isEmpty(link?.title) || isEmpty(link?.url)) {
      toast.error("Please enter a valid link, title and url can't be empty");
      return false;
    }
  }

  return true;
};
