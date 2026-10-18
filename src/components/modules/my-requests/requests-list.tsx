"use client";

import { useGetMyRequests } from "@/hooks";
import { BloodRequests } from "@/types";
import { useSearchParams } from "next/navigation";

function getStatusClass(status: string) {
  switch (status.toUpperCase()) {
    case "PAID":
    case "APPROVED":
    case "FULFILLED":
      return "bg-green-100 text-green-700";

    case "PENDING":
    case "UNPAID":
      return "bg-yellow-100 text-yellow-700";

    case "FAILED":
    case "REJECTED":
    case "CANCELLED":
    case "EXPIRED":
      return "bg-red-100 text-red-700";

    case "REFUNDED":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(status)}`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date unavailable";
  }

  return parsedDate.toLocaleString("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function RequestList() {
  const params = useSearchParams();
  const statusFilter = params.get("status")?.toUpperCase();

  const { data, isLoading, isError } = useGetMyRequests({
    page: 1,
    limit: 10,
  });

  const requests: BloodRequests[] = data?.data ?? [];

  // Filter by blood request status from the URL.
  const filteredRequests = statusFilter
    ? requests.filter(
        (request) => request.status.toUpperCase() === statusFilter,
      )
    : requests;

  if (isLoading) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Loading your blood requests...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 p-6 text-center text-red-600">
        Failed to load your blood requests. Please try again.
      </div>
    );
  }

  if (filteredRequests.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center">
        <h2 className="text-lg font-semibold">No blood requests found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {statusFilter
            ? `You don't have any ${statusFilter.toLowerCase()} requests.`
            : "You haven't created any blood requests yet."}
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold">My Blood Requests</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your blood requests and payment status.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredRequests.map((request) => (
          <article
            key={request.id}
            className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Blood group</p>
                <h2 className="mt-1 text-xl font-bold text-red-600">
                  {request.bloodGroup.replaceAll("_", " ")}
                </h2>
              </div>

              <StatusBadge status={request.status} />
            </div>

            {/* Request details */}
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Hospital</span>
                <span className="text-right font-medium">
                  {request.hospitalName}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Location</span>
                <span className="text-right">{request.city}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Units required</span>
                <span className="font-medium">{request.unitsRequired}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Units fulfilled</span>
                <span className="font-medium">
                  {request.unitsFulfilled} / {request.unitsRequired}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Urgency</span>
                <span className="font-medium">{request.urgency}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Required date</span>
                <span className="text-right">
                  {formatDate(request.requiredDate)}
                </span>
              </div>

              <div className="border-t pt-3">
                <p className="text-muted-foreground">Reason</p>
                <p className="mt-1">{request.reason}</p>
              </div>
            </div>

            {/* Payment details */}
            <div className="mt-5 rounded-lg bg-muted/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">Payment</h3>

                {request.payment ? (
                  <StatusBadge status={request.payment.status} />
                ) : (
                  <StatusBadge status="NOT CREATED" />
                )}
              </div>

              {request.payment ? (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-semibold">
                      {request.payment.currency} {request.payment.amount}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Gateway</span>
                    <span>{request.payment.gateway}</span>
                  </div>

                  {request.payment.paidAt && (
                    <div className="flex justify-between gap-3">
                      <span className="text-muted-foreground">Paid at</span>
                      <span className="text-right">
                        {formatDate(request.payment.paidAt)}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No payment record is available.
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="mt-4 border-t pt-3">
              <p className="text-xs text-muted-foreground">
                Created {formatDate(request.createdAt)}
              </p>

              <p className="mt-1 break-all text-xs text-muted-foreground">
                Request ID: {request.id}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
