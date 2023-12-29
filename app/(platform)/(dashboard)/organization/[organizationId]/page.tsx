import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      Organization Page
      {/* Organization: {orgId}
      <div>
        <OrganizationSwitcher hidePersonal />
      </div> */}
    </div>
  );
};

export default OrganizationIdPage;
