import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getDragonBall } from "../../../core/accion/dragonball/get-dragonball.action";
import axios from "axios";

export const useDragonBall = () => {
//   const getDragonBallTQ = useInfiniteQuery({
//       queryKey: ['dragonball','getdragonball','infinite'],
//       initialPageParam: 0,
//       queryFn: ({pageParam}) => {
//           return getDragonBall({page: pageParam})
//       },
//       getNextPageParam:(lastPage,pages)=>pages.length + 1,
//       // staleTime: 1000 * 60 * 60 * 24 //24 horas
//       staleTime: 100 //24 horas
//   });
  const getDragonBallTQ = useInfiniteQuery({
    queryKey: ["dragonball", "getdragonball", "infinite"],
    initialPageParam: 0,
    queryFn: (params) => {
        return getDragonBall({page: params.pageParam})
    },
    getNextPageParam:(lastPage,pages)=>pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24 //24 horas
    // staleTime: 100, //24 horas
  });
  return { getDragonBallTQ };
};
