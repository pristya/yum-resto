import React from "react";

const OrdersPage = () => {
    return (
                <div className="p-4 lg:px-20 xl:px-40">
            <table className="w-full border-separate border-spacing-3">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className="hidden md:block">Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="font-medium">
                    <tr className="text-sm md:text-base bg-red-50">
                        <td className="hidden md:block py-6 px-1">70217309721</td>
                        <td className="py-6 px-1">07-02-2026</td>
                        <td className="py-6 px-1">Rp. 60000</td>
                        <td className="hidden md:block py-6 px-1">Ayam Bakar Sambal Terasi (2)</td>
                        <td className="py-6 px-1 font-bold text-red-500">On the way (approx, 10 min)... </td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">70217312431</td>
                        <td className="py-6 px-1">06-02-2026</td>
                        <td className="py-6 px-1">Rp. 90000</td>
                        <td className="hidden md:block py-6 px-1">Ayam Bakar Sambal Terasi (3)</td>
                        <td className="py-6 px-1 font-bold text-green-600">Successfull</td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">702173309871</td>
                        <td className="py-6 px-1">06-02-2026</td>
                        <td className="py-6 px-1">Rp. 32000</td>
                        <td className="hidden md:block py-6 px-1">Spaghetti Bolognese (1)</td>
                        <td className="py-6 px-1 font-bold text-green-600">Successfull</td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">70217398534</td>
                        <td className="py-6 px-1">05-02-2026</td>
                        <td className="py-6 px-1">Rp. 85000</td>
                        <td className="hidden md:block py-6 px-1">Sirloin Steak Grilled (1)</td>
                        <td className="py-6 px-1 font-bold text-green-600">Successfull</td>
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100">
                        <td className="hidden md:block py-6 px-1">70217367231</td>
                        <td className="py-6 px-1">02-02-2026</td>
                        <td className="py-6 px-1">Rp. 28000</td>
                        <td className="hidden md:block py-6 px-1">Ayam Bakar Taliwang (1)</td>
                        <td className="py-6 px-1 font-bold text-green-600">Successfull</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;