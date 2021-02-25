package com.ntoday.mycat.dto;

import com.ntoday.mycat.domain.Cat;
import com.ntoday.mycat.domain.audit.DateAudit;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
public class WeightDTO {
    private int weight;
    private CatDTO cat;
}