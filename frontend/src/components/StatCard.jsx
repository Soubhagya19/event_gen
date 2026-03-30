import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow"
        >
            <h4 className="text-gray-500">{title}</h4>
            <h2 className="text-2xl font-bold">{value}</h2>
        </motion.div>
    );
}