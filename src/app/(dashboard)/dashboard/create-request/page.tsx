import CreateRequestList from "@/components/modules/requester/create-request-list";

export default function CreateBloodRequest() {
  return (
    <section className="p-5">
      <div>
        <h1 className="text-2xl">Make Blood Requests</h1>
      </div>
      <CreateRequestList />
    </section>
  );
}
