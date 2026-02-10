// components/AuctionRanking.tsx
"use client"; // Necessário se você estiver usando Next.js App Router e componentes interativos

import React from 'react';
import { Card, CardBody, User, Avatar, Chip, Divider } from '@heroui/react';
import { motion } from 'framer-motion';

// Interface para definir a estrutura de uma proposta
interface Proposal {
  id: string;
  name: string;
  amount: number;
  avatarUrl?: string; // URL opcional para a imagem do avatar
}

interface AuctionRankingProps {
  proposals: Proposal[];
  title?: string;
}

const AuctionRanking: React.FC<AuctionRankingProps> = ({ proposals, title = "Lances do Leilão" }) => {
  // Ordena as propostas da maior para a menor
  const sortedProposals = [...proposals].sort((a, b) => b.amount - a.amount);

  // Define as variantes para animações de lista com Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Atraso entre a animação de cada item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  } as any;

  return (
    <Card className="max-w-md mx-auto p-4 border border-slate-200 dark:border-white/10 shadow-sm">
      <CardBody className=''>
        <h2 className="text-2xl font-bold text-center mb-4 text-default-900 dark:text-white">
          {title}
          <p className="text-sm text-gray-400 mt-1 font-normal">Total: 18</p>
        </h2>

        {sortedProposals.length === 0 ? (
          <p className="text-center text-default-500">Nenhum lance foi feito ainda.</p>
        ) : (
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedProposals.map((proposal, index) => {
              const isHighest = index === 0;
              //   const isSecond = index === 1;
              //   const isThird = index === 2;
              const isSecond = false;
              const isThird = false;

              return (
                <motion.div key={proposal.id} variants={itemVariants}>
                  <div
                    className={`
                      flex items-center justify-between p-3 rounded-xl transition-all duration-300
                      ${isHighest ? 'bg-gradient-to-r from-indigo-100 to-indigo-300 dark:text-white shadow-lg scale-105' : ''}
                      ${isSecond ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-black scale-100' : ''}
                      ${isThird ? 'bg-gradient-to-r from-orange-300 to-orange-400 text-black scale-100' : ''}
                      ${!isHighest && !isSecond && !isThird ? 'bg-default-50 hover:bg-default-100 dark:bg-default-50/20 dark:hover:bg-default-50/30' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Chip
                        variant="flat"
                        color={isHighest ? "primary" : isSecond ? "default" : isThird ? "danger" : "default"}
                        size="sm"
                        className={`min-w-[30px] flex justify-center
                            ${isHighest ? 'bg-white' : ''}
                        `}
                      >
                        {index + 1}º
                      </Chip>
                      <User
                        name={proposal.name}
                        description={isHighest ? "Líder do Leilão" : `Lance: R$ ${proposal.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                        avatarProps={{
                          src: proposal.avatarUrl || `https://i.pravatar.cc/150?u=${proposal.id}`, // Avatar padrão se não houver URL
                          size: "md",
                          isBordered: isHighest,
                          color: isHighest ? "warning" : "default",
                        }}
                        className={`${isHighest ? 'text-indigo-500' : ''}`}
                      />
                    </div>
                    {!isHighest && (
                      <Chip
                        variant="bordered"
                        color="primary"
                        className="font-medium text-lg border-1 border-gray-400"
                      >
                        R$ {proposal.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </Chip>
                    )}
                    {isHighest && (
                      <Chip
                        variant="bordered"
                        color="primary"
                        className="font-medium text-lg border-1 border-gray-100 text-gray-800"
                      >
                        R$ {proposal.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </Chip>
                    )}
                  </div>
                  {index < sortedProposals.length - 1 && <Divider className="my-2" />}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </CardBody>
    </Card>
  );
};

export default AuctionRanking;