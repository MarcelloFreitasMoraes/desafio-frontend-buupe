import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FormsProps {
    selectedRange: string;
    handleCheckboxChange: (range: string) => void;
}

const priceFilters = [
    { id: 1, label: "Abaixo de R$50", range: '0-50' },
    { id: 2, label: "Entre R$50 e R$100", range: '51-100' },
    { id: 3, label: "Acima de R$100", range: '101+' },
];

const Forms: React.FC<FormsProps> = ({ selectedRange, handleCheckboxChange }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("productName") || "");

    const handleSearch = (value: string) => {
        setSearchParams({ productName: value });
    };

    return (
        <>
            <div className='py-4'>
                <Input
                    className='border-t border-gray-300 bg-white'
                    placeholder="Buscar produto..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch(searchQuery);
                    }}
                    endIcon={<Search onClick={() => handleSearch(searchQuery)} />}
                />
            </div>
            <div className='pb-4'>
                <h2 className="text-lg font-semibold text-black">Filtrar por Preço</h2>
                {priceFilters.map((filter) => (
                    <div key={filter.id} className="flex items-center gap-2 mt-2">
                        <Checkbox
                            id={filter.id.toString()}
                            className='border-t border-gray-200 bg-white cursor-pointer'
                            checked={selectedRange === filter.range}
                            onCheckedChange={() => handleCheckboxChange(filter.range)}
                        />
                        <Label className="text-black cursor-pointer">
                            {filter.label}
                        </Label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Forms;