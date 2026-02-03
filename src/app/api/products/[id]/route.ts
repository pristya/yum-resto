
// import { Prisma } from "@prisma/client/extension";
// import { NextRequest, NextResponse } from "next/server";





// // Get single product 
// export async function GET(
//     request: NextRequest,
//     {params}: {params: {id: string}}
// ) {
//     const {id} = params;
//     try {
//         const products = await prisma.product.findUnique
//         return new NextResponse(JSON.stringify(products), { status: 200});
//     } catch (err) {
//         console.error(err);
//         return new NextResponse("Database Error", { status: 500});
//     }
// }