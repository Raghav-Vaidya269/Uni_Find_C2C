import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Toast = ({ message, type, onClose }) => {
    const [isExiting, setIsExiting] = useState(false);

    const icons = {
        success: <CheckCircle className="h-5 w-5 text-green-500" />,
        error: <AlertCircle className="h-5 w-5 text-red-500" />,
        warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
        info: <Info className="h-5 w-5 text-blue-500" />,
    };

    const bgColors = {
        success: 'bg-green-50 border-green-100',
        error: 'bg-red-50 border-red-100',
        warning: 'bg-yellow-50 border-yellow-100',
        info: 'bg-blue-50 border-blue-100',
    };

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(onClose, 300); // Wait for fade out animation
    };

    return (
        <div
            className={`
                flex items-center gap-3 p-4 rounded-xl border shadow-lg pointer-events-auto
                min-w-[300px] max-w-md transition-all duration-300 transform
                ${isExiting ? 'opacity-0 translate-x-10 scale-95' : 'opacity-100 translate-x-0 scale-100'}
                ${bgColors[type] || bgColors.info}
                animate-in slide-in-from-right-10 duration-300
            `}
        >
            <div className="flex-shrink-0">
                {icons[type] || icons.info}
            </div>
            <div className="flex-1 text-sm font-medium text-gray-800">
                {message}
            </div>
            <button
                onClick={handleClose}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default Toast;
