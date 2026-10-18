import { createBloodRequest, createDonation, getMyRequests } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCreateDonation() {
  return useMutation({
    mutationFn: createDonation,
  });
}
export function useCreateBloodRequest() {
  return useMutation({
    mutationFn: createBloodRequest,
  });
}

export function useGetMyRequests(params: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ["requests"],
    queryFn: () => getMyRequests(params),
  });
}
